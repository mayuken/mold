export const Practice4 = () => {
  // tsconfig.jsonで "strict": true を設定してあると
  // 型を明示的にしておかないとエラーが出る
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題:設定ファイルを触る</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
