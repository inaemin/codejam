import { useEffect, useRef } from 'react';
import type { Terminal as XTerm } from 'xterm';
import { useCodeExecutionStore } from '@/stores/code-execution';
import { ansi } from '@/widgets/terminal/utils/ansi';

/**
 * Handle runtime info display
 */
export function useRuntimeDisplay(xterm: XTerm | null) {
  const runtime = useCodeExecutionStore((state) => state.runtime);

  useEffect(() => {
    if (!xterm || !runtime) return;
    const { language, version } = runtime;
    const msg = ansi.dim(`Runtime: ${language} ${version}`) + '\r\n\r\n';
    xterm.write(msg);
  }, [xterm, runtime]);
}

/**
 * Handle stage change display
 */
export function useStageDisplay(xterm: XTerm | null) {
  const stage = useCodeExecutionStore((state) => state.stage);

  useEffect(() => {
    if (!xterm || !stage) return;

    const label = stage.stage === 'compile' ? 'Compiling' : 'Running';
    const msg = ansi.cyan(`${label}...`) + '\r\n';
    xterm.write(msg);
  }, [xterm, stage]);
}

/**
 * Handle streaming data chunks
 */
export function useDataStream(xterm: XTerm | null) {
  const data = useCodeExecutionStore((state) => state.data);

  useEffect(() => {
    if (!xterm || !data) return;

    const output = data.data;

    if (data.stream === 'stderr') {
      xterm.write(ansi.red(output));
    } else {
      xterm.write(output);
    }
  }, [xterm, data]);
}

/**
 * Handle execution completion
 */
export function useExecutionCompletion(xterm: XTerm | null) {
  const exit = useCodeExecutionStore((state) => state.exit);
  const isExecuting = useCodeExecutionStore((state) => state.isExecuting);
  const prevIsExecutingRef = useRef(false);

  useEffect(() => {
    // Always update the ref to track isExecuting state
    const wasExecuting = prevIsExecutingRef.current;
    prevIsExecutingRef.current = isExecuting;

    // Show completion message when we have exit data
    if (!xterm || !exit) return;

    const { stage, code, signal } = exit;
    if (code === null && signal === null) return;

    // Handle compile stage completion
    if (stage === 'compile') {
      const msg = signal
        ? ansi.yellow(`Compilation terminated by signal: ${signal}`)
        : code === 0
          ? ansi.green('Compilation successful')
          : ansi.red(`Compilation failed with code ${code}`);

      xterm.write(msg + '\r\n\r\n');
      return;
    }

    // Handle run stage completion
    // Show when execution fully completes
    if (stage === 'run') {
      if (!wasExecuting || isExecuting) return;

      if (signal) {
        xterm.write(
          ansi.yellow(`Terminated by signal: ${signal}`) + '\r\n\r\n',
        );
      } else if (code === 0) {
        xterm.write(
          ansi.green(`Process exited with code ${code}`) + '\r\n\r\n',
        );
      } else {
        xterm.write(ansi.red(`Process exited with code ${code}`) + '\r\n\r\n');
      }
    }
  }, [xterm, exit, isExecuting]);
}

/**
 * Composite hook: Handle all streaming execution display
 */
export function useExecutionStream(xterm: XTerm | null) {
  useRuntimeDisplay(xterm);
  useStageDisplay(xterm);
  useDataStream(xterm);
  useExecutionCompletion(xterm);
}
