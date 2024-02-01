export default function Hansha() {
  return (
    <main>
      <div className="flex flex-col bg-brand p-5 rounded-b-md">
        <h1 className="text-4xl font-bold mb-2 text-white">
          <a href="/">一般社団法人TSKaigi Association</a>
        </h1>
      </div>
      <div className="px-3 py-5">
        <h2 className="text-xl font-bold mb-4">
          一般社団法人TSKaigi Associationについて
        </h2>
        <p>
          弊一般社団法人は、日本および世界各国におけるTypeScriptの普及と進化に寄与することを目的とした非営利団体です。
          <br />
          その目的を達成するために、TypeScriptに関するカンファレンスの開催や、TypeScriptの普及に関する情報の発信を行っています。
        </p>
      </div>
      <div className="px-3 py-5">
        <h2 className="text-xl font-bold mb-4">反社会的勢力に対する基本方針</h2>
        <div>
          当社は、法の支配と社会秩序を重んじ、企業市民としての社会的責任と倫理観を持って事業活動を行っております。このため、反社会的勢力に属する組織や個人とは一切関わりを持たず、断固としてこれを排除する姿勢を明確にしております。
          <h3 className="text-lg font-bold m-2">表明</h3>
          <ul className="list-inside list-disc">
            <li>
              当社は、反社会的勢力が経済社会に与える影響に鑑み、これらの勢力とのあらゆる関係を遮断します。
            </li>
            <li>
              当社は、反社会的勢力による不当な要求には一切応じず、法的措置を含む適切な対応を取ります。
            </li>
            <li>
              当社は、反社会的勢力との取引や関係を持つことが判明した場合、直ちに関係を解消します。
            </li>
            <li>
              当社は、社内体制の整備を図り、反社会的勢力との関わりが生じないよう予防策を講じます。
            </li>
            <li>
              当社は、反社会的勢力に対する正しい認識をもとに、全社員が一致団結して取り組むことを宣言します。
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
