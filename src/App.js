function App() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'CA', '='];
  return (
    <div className='w-full h-screen min-w-full flex justify-center items-center bg-pink-50 font-display'>
      <div className='flex flex-col w-full min-h-568 min-w-320 mobile:w-11/12 mobile:max-w-screen-mobile h-4/6 bg-pink-100'>
        <div className='h-2/6 flex justify-center items-center'>02134</div>
        <div className='flex w-full h-4/6 w-full'>
          <ul className='flex flex-wrap w-3/4 m-1 box-border min-w-screen-mobile'>
            {numbers.map((num) => {
              return (
                <li className='w-1/3 h-1/4 flex justify-center items-center bg-pink-50 rounded-full box-border shadow'>
                  {num}
                </li>
              );
            })}
          </ul>
          <ul className='flex flex-col w-1/4'>
            <li className='h-1/4 bg-pink-200 m-1 rounded-full flex justify-center items-center box-border shadow'>
              +
            </li>
            <li className='h-1/4 bg-pink-200 m-1 rounded-full flex justify-center items-center box-border shadow'>
              -
            </li>
            <li className='h-1/4 bg-pink-200 m-1 rounded-full flex justify-center items-center box-border shadow'>
              &times;
            </li>
            <li className='h-1/4 bg-pink-200 m-1 rounded-full flex justify-center items-center box-border shadow'>
              .
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
