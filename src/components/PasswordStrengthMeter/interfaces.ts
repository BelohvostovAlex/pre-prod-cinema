export interface PasswordStrengthMeterProps {
  value: string;
}

export type ProgressBarProps = Pick<PasswordStrengthMeterProps, "value">;
