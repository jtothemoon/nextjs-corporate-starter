// src/lib/logger.ts
type LogLevel = 'error' | 'warn' | 'info' | 'debug'

// 로그 컨텍스트 타입 정의 (any 제거)
type LogContext = Record<string, string | number | boolean | null | undefined>

interface LogEntry {
  level: LogLevel
  message: string
  error?: Error
  timestamp: string
  context?: LogContext
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development'

  private log(
    level: LogLevel,
    message: string,
    error?: Error,
    context?: LogContext
  ) {
    const entry: LogEntry = {
      level,
      message,
      error,
      timestamp: new Date().toISOString(),
      context,
    }

    // 개발환경에서는 console 출력
    if (this.isDevelopment) {
      // ESLint no-console 규칙 비활성화 (로거에서만 허용)
      /* eslint-disable no-console */
      const consoleMethod =
        level === 'error'
          ? console.error
          : level === 'warn'
            ? console.warn
            : console.log

      if (error) {
        consoleMethod(
          `[${level.toUpperCase()}] ${message}`,
          error,
          context || ''
        )
      } else {
        consoleMethod(`[${level.toUpperCase()}] ${message}`, context || '')
      }
      /* eslint-enable no-console */
    }

    // 프로덕션에서는 외부 로깅 서비스로 전송 (향후 구현)
    if (!this.isDevelopment) {
      this.sendToLoggingService(entry)
    }
  }

  private sendToLoggingService(entry: LogEntry): void {
    // 실제 로깅 서비스 연동 시 구현
    // 예: Sentry, LogRocket, DataDog 등

    // 향후 구현 예시:
    // if (typeof window !== 'undefined') {
    //   // 클라이언트 사이드 로깅 서비스
    //   console.log('Would send to logging service:', entry)
    // }

    // 현재는 의도적으로 아무것도 하지 않음
    void entry
  }

  error(message: string, error?: Error, context?: LogContext) {
    this.log('error', message, error, context)
  }

  warn(message: string, context?: LogContext) {
    this.log('warn', message, undefined, context)
  }

  info(message: string, context?: LogContext) {
    this.log('info', message, undefined, context)
  }

  debug(message: string, context?: LogContext) {
    if (this.isDevelopment) {
      this.log('debug', message, undefined, context)
    }
  }
}

export const logger = new Logger()
