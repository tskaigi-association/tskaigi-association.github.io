export default function Home() {
  const members = [
    { title: "代表理事", name: "竹下義晃" },
    { title: "理事", name: "清水俊博" },
    { title: "理事", name: "丹羽健" },
    { title: "理事", name: "塩原大介" },
  ];

  const conferences = [{ name: "TSKaigi 2024", url: "https://tskaigi.org" }];

  return (
    <main className="flex min-h-screen flex-col items-left">
      <div className="flex flex-col bg-brand p-5 rounded-b-md">
        <h1 className="text-4xl font-bold mb-4 text-white">
          一般社団法人TSKaigi Association
        </h1>
        <p className="text-2xl text-gray-200 dark:text-gray-300">
          TSKaigiの運営を行う団体です。
        </p>
      </div>
      <div className="p-5 flex flex-col">
        <div className="flex flex-col mb-5">
          <h1 className="text-2xl font-bold">開催カンファレンス</h1>
          <div className="mt-3">
            <ul className="list-none">
              {conferences.map((conference, index) => (
                <li key={index}>
                  <a href={conference.url} className="text-blue-600 text-xl">
                    {conference.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <h1 className="text-2xl font-bold">メンバー</h1>
          <table className="mt-3 w-64">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left border-black">
                  役職
                </th>
                <th className="border px-4 py-2 text-left border-black">
                  氏名
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 border-black">
                    {member.title}
                  </td>
                  <td className="border px-4 py-2 border-black">
                    {member.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col mb-5">
          <h1 className="text-2xl font-bold">お問い合わせ</h1>
          <p className="text-xl p-1">
            イベントへのお問い合わせは、各イベント別のお問い合わせ窓口までお願いします。
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">決算報告</h1>
          <p className="text-xl p-1">
            初年度のため、現在決算資料はございません。
          </p>
        </div>
      </div>
      <footer className="bg-brand p-3">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-200 sm:text-center dark:text-gray-400">
            © 2024 TSKaigi Association. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">
                about
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
