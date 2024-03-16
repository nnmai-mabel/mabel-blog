export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Mabel' Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>Welcome to Mabel's blog. Hope you will like the content being
              shared here. Don't forget to leave comments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}