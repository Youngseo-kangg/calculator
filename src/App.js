import { useState } from 'react';

function App() {
  const numbers = ['.', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [status, setStatus] = useState({
    numStat: false,
    screen: '0',
    firstNum: '',
    operator: '',
    secondNum: '',
    result: '',
  });

  // 번호 입력하는 함수 changeNum
  const changeNum = (event) => {
    // TODO : nunStat을 기준으로 첫번째 수 또는 두번째 수에 숫자를 더해주고, 화면에도 띄워줘야 함
    let currentNum = event.target.innerHTML;
    if (status.numStat === false) {
      // TODO : 첫번째 수 입력하는 경우
      if (status.result) {
        // TODO : 계산한 적이 있을 때
        setStatus({
          ...status,
          screen: currentNum, // 화면에 띄워주기
          firstNum: status.firstNum + currentNum, // secondNum 기억하고 있기
        });
      } else if (!status.firstNum) {
        // TODO : 아예 처음으로 입력할때
        setStatus({
          ...status,
          screen: currentNum, // 화면에 0 대신 클릭한 숫자로 띄워주기
          firstNum: currentNum, // firstNum 기억하고 있기
        });
      } else {
        // TODO : 이후에 입력할때
        setStatus({
          ...status,
          screen: status.screen + currentNum, // 화면에 띄워주기
          firstNum: status.firstNum + currentNum, // firstNum 기억하고 있기
        });
      }
    } else {
      // TODO : 두번째 수 입력하는 경우
      if (status.result) {
        // TODO : 계산한 적이 있을 때
        setStatus({
          ...status,
          screen: currentNum, // 화면에 띄워주기
          firstNum: status.firstNum + currentNum, // secondNum 기억하고 있기
        });
      } else if (!status.secondNum) {
        // TODO : 아예 처음으로 입력할때
        setStatus({
          ...status,
          screen: currentNum, // 화면에 띄워주기
          secondNum: status.secondNum + currentNum, // secondNum 기억하고 있기
        });
      } else {
        // TODO : 이후에 입력할때
        setStatus({
          ...status,
          screen: status.screen + currentNum, // 화면에 띄워주기
          secondNum: status.secondNum + currentNum, // secondNum 기억하고 있기
        });
      }
    }
  };

  // 계산자 입력하는 함수 changeOperator
  const changeOperator = (event) => {
    let currOperator = event.target.innerHTML;
    setStatus({
      ...status,
      numStat: !status.numStat, // TODO : numStat 변경해주기 -> 이래야 첫번째수인지, 두번째인지 알게됨
      screen: '', // TODO : screen 빈칸 처리
      operator: currOperator, // TODO : 계산자 입력받아서 기억하고 있기
    });
  };

  // 계산하는 함수 changeResult
  const changeResult = () => {
    if (status.operator === '+') {
      if (status.result !== '') {
        // TODO : 이전에 계산 기록이 있다면
        setStatus({
          ...status,
          result: parseFloat(status.result) + parseFloat(status.firstNum), // TODO : 결과값 가지고 있기
          screen: parseFloat(status.result) + parseFloat(status.firstNum), // TODO : 스크린에 보여주기
          firstNum: '', // TODO : firstNum 빈칸으로 바꿔주기
          secondNum: '', // TODO : secondNum 빈칸으로 바꿔주기
          numStat: false, // TODO : numStat 변경해서 앞으로 입력할 값 2번째값으로 되도록 변경
        });
      } else {
        setStatus({
          ...status,
          result: parseFloat(status.firstNum) + parseFloat(status.secondNum), // TODO : 결과값 가지고 있기
          screen: parseFloat(status.firstNum) + parseFloat(status.secondNum), // TODO : 스크린에 보여주기
          firstNum: '', // TODO : firstNum 빈칸으로 바꿔주기
          secondNum: '', // TODO : secondNum 빈칸으로 바꿔주기
          numStat: false, // TODO : numStat 변경해서 앞으로 입력할 값 2번째값으로 되도록 변경
        });
      }
    } else if (status.operator === '-') {
      if (status.result !== '') {
        setStatus({
          ...status,
          result: parseFloat(status.result) - parseFloat(status.firstNum), // TODO : 결과값 가지고 있기
          screen: parseFloat(status.result) - parseFloat(status.firstNum), // TODO : 스크린에 보여주기
          firstNum: '', // TODO : firstNum 빈칸으로 바꿔주기
          secondNum: '', // TODO : secondNum 빈칸으로 바꿔주기
          numStat: false, // TODO : numStat 변경해서 앞으로 입력할 값 2번째값으로 되도록 변경
        });
      } else {
        setStatus({
          ...status,
          result: parseFloat(status.firstNum) - parseFloat(status.secondNum), // TODO : 결과값 가지고 있기
          screen: parseFloat(status.firstNum) - parseFloat(status.secondNum), // TODO : 스크린에 보여주기
          firstNum: '', // TODO : firstNum 빈칸으로 바꿔주기
          secondNum: '', // TODO : secondNum 빈칸으로 바꿔주기
          numStat: false, // TODO : numStat 변경해서 앞으로 입력할 값 2번째값으로 되도록 변경
        });
      }
    } else if (status.operator === '×') {
      if (status.result !== '') {
        setStatus({
          ...status,
          result: parseFloat(status.result) * parseFloat(status.firstNum), // TODO : 결과값 가지고 있기
          screen: parseFloat(status.result) * parseFloat(status.firstNum), // TODO : 스크린에 보여주기
          firstNum: '', // TODO : firstNum 빈칸으로 바꿔주기
          secondNum: '', // TODO : secondNum 빈칸으로 바꿔주기
          numStat: false, // TODO : numStat 변경해서 앞으로 입력할 값 2번째값으로 되도록 변경
        });
      } else {
        setStatus({
          ...status,
          result: parseFloat(status.firstNum) * parseFloat(status.secondNum), // TODO : 결과값 가지고 있기
          screen: parseFloat(status.firstNum) * parseFloat(status.secondNum), // TODO : 스크린에 보여주기
          firstNum: '', // TODO : firstNum 빈칸으로 바꿔주기
          secondNum: '', // TODO : secondNum 빈칸으로 바꿔주기
          numStat: false, // TODO : numStat 변경해서 앞으로 입력할 값 2번째값으로 되도록 변경
        });
      }
    } else if (status.operator === '/') {
      if (status.result !== '') {
        setStatus({
          ...status,
          result: parseFloat(status.result) / parseFloat(status.firstNum), // TODO : 결과값 가지고 있기
          screen: parseFloat(status.result) / parseFloat(status.firstNum), // TODO : 스크린에 보여주기
          firstNum: '', // TODO : firstNum 빈칸으로 바꿔주기
          secondNum: '', // TODO : secondNum 빈칸으로 바꿔주기
          numStat: false, // TODO : numStat 변경해서 앞으로 입력할 값 2번째값으로 되도록 변경
        });
      } else {
        setStatus({
          ...status,
          result: parseFloat(status.firstNum) / parseFloat(status.secondNum), // TODO : 결과값 가지고 있기
          screen: parseFloat(status.firstNum) / parseFloat(status.secondNum), // TODO : 스크린에 보여주기
          firstNum: '', // TODO : firstNum 빈칸으로 바꿔주기
          secondNum: '', // TODO : secondNum 빈칸으로 바꿔주기
          numStat: false, // TODO : numStat 변경해서 앞으로 입력할 값 2번째값으로 되도록 변경
        });
      }
    }
  };

  console.log(status);
  return (
    <div className='w-full h-screen min-w-full flex justify-center items-center bg-pink-50 font-display'>
      <div className='flex flex-col w-full min-h-568 min-w-280 mobile:w-11/12 mobile:max-w-screen-mobile h-4/6 bg-pink-100 rounded-lg shadow'>
        <div className='h-1/6 flex justify-center items-center text-3xl'>
          {status.screen}
        </div>
        <ul className='h-1/6 flex'>
          <li className='w-1/2 flex justify-center items-center bg-pink-200 rounded-full shadow'>
            CA
          </li>
          <li
            className='w-1/2 flex justify-center items-center bg-pink-200 rounded-full shadow'
            onClick={changeResult}
          >
            ENTER
          </li>
        </ul>
        <div className='flex w-full h-4/6 w-full'>
          <ul className='flex flex-wrap w-3/4 m-1 box-border min-w-screen-mobile'>
            {numbers.reverse().map((num) => {
              if (num === 0) {
                return (
                  <li
                    className='w-2/3 h-1/4 flex justify-center items-center bg-pink-50 rounded-full box-border shadow'
                    key={num}
                    onClick={(event) => changeNum(event)}
                  >
                    {num}
                  </li>
                );
              } else {
                return (
                  <li
                    className='w-1/3 h-1/4 flex justify-center items-center bg-pink-50 rounded-full box-border shadow'
                    key={num}
                    onClick={(event) => changeNum(event)}
                  >
                    {num}
                  </li>
                );
              }
            })}
          </ul>
          <ul className='flex flex-col w-1/4'>
            <li
              className='h-1/4 bg-pink-200 m-1 rounded-full flex justify-center items-center box-border shadow'
              onClick={(event) => changeOperator(event)}
            >
              +
            </li>
            <li
              className='h-1/4 bg-pink-200 m-1 rounded-full flex justify-center items-center box-border shadow'
              onClick={(event) => changeOperator(event)}
            >
              -
            </li>
            <li
              className='h-1/4 bg-pink-200 m-1 rounded-full flex justify-center items-center box-border shadow'
              onClick={(event) => changeOperator(event)}
            >
              &times;
            </li>
            <li
              className='h-1/4 bg-pink-200 m-1 rounded-full flex justify-center items-center box-border shadow'
              onClick={(event) => changeOperator(event)}
            >
              /
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
