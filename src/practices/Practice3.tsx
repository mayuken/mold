export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    // わざとString型に変換
    return total.toString();
  };

  const onClickPractice = () => {
    // 変数名: 型 とすることで変数にも型指定できる
    let total: number = 0;
    total = getTotalFee(1000); //totalに指定と異なる型が入っているとエラーが出る
    console.log(total);
  };

  return (
    <div>
      <p>練習問題:変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
