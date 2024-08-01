
export function MenuIndicator({ show, selected }: { show: boolean; selected: boolean }) {
  if (!show) {
    return null
  }
  return (
    <i className={`${selected && 'rotate-90 transition-transform'}`}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
        fill='currentColor'
        viewBox='0 0 256 256'
      >
        <path d='M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z'></path>
      </svg>
    </i>
  )
}
