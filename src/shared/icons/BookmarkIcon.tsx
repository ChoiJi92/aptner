const BookmarkIcon = ({ bookmarked }: { bookmarked: boolean }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={bookmarked ? 'var(--black)' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2H5C4.44772 2 4 2.44772 4 3V18L10 15L16 18V3C16 2.44772 15.5523 2 15 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default BookmarkIcon
