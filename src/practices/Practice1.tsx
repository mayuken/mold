export const Practice1 = () => {
  // JSは暗黙的に型の変換を行ってくれる
  // calcTotalFeeの引数が(num)の場合、たとえ文字列("1000")でも問題なく動作する
  // しかしこれは思い掛けない動作不良につながるので
  // 予め引数の型指定は行った方がベター
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total); // 1100
  };

  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題:引数の型指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
