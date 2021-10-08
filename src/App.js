import './App.css';

function App() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='App'>
      <div>
        <div>
          <div></div> {/* 숫자 입력한거 보이는 창 */}
          <ul>
            <li>ON</li>
            <li>OFF</li>
            <li>CA</li>
            <li>=</li>
          </ul>{' '}
          {/* ON, OFF, CANCEL ALL, = */}
          <div>
            <ul>
              {numbers.map((num) => {
                return <li>{num}</li>;
              })}
            </ul>{' '}
            {/* 숫자 창들 */}
            <ul>
              <li>+</li>
              <li>-</li>
              <li>&times;</li>
              <li>.</li>
            </ul>{' '}
            {/* 더하기, 빼기, 곱하기, 나누기, 소수점 */}
          </div>
          {/* 숫자창, 더하기빼기 창 */}
        </div>
        {/* modal */}
      </div>
      {/* backdrop */}
    </div>
  );
}

export default App;
