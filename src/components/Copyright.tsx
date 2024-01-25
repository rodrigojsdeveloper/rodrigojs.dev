const Copyright = () => {
  const year = new Date().getFullYear()

  return (
    <small className="text-center text-xs font-medium text-gray-100">
      &copy; {year} - rodrigojsdeveloper
    </small>
  )
}

export default Copyright
