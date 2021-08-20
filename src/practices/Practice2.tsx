export const Practice2 = () => {
  // 引数の後に : 型 とすることで返却値の型を明示できる
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total; // number型ということがわかる
  };

  const onClickPractice = () => {
    console.log(getTotalFee(1000)); //1100
  };

  return (
    <div>
      <p>練習問題:返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
