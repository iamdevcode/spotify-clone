import clsx from 'clsx'

export const Button = ({
  title,
  width,
  height,
  backgroundColor,
  color,
  onPress,
  disabled,
  icon,
  big,
  rounded,
  className
}) => {
  return (
    <button
      style={{
        width,
        height,
        backgroundColor,
        color
      }}
      className={clsx(
        'rounded-[5px] shadow-md block',
        className,
        rounded && 'rounded-full',
        !disabled && 'hover:opacity-90',
        disabled && 'hover:cursor-not-allowed opacity-60',
        icon && 'flex justify-center items-center'
      )}
      onClick={onPress}
      disabled={disabled}
    >
      {!icon && (
        <span className={clsx('font-medium', big && 'text-xl uppercase')}>
          {title}
        </span>
      )}
      {icon}
    </button>
  )
}
