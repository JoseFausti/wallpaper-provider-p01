const Error = ({error}: {error: string}) => {
  return (
    <div className="">
      <h1>Error</h1>
      <p>{error}</p>
    </div>
  )
}

export default Error
