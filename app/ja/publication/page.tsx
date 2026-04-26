import PublicationPage from '../../components/PublicationPage';

export default function PublicationJA() {
  return (
    <PublicationPage
      title="研究業績"
      summary="研究室の代表的な論文・国際会議成果を年度別に整理しています。"
      homeHref="/ja"
      homeLabel="ホームへ戻る"
      emptyYearLabel="その他"
      pdfLabel="PDF版"
      urlLabel="リンク"
      doiLabel="DOI"
      allYearsLabel="全年度"
      filterAllLabel="すべて"
      filterDocLabel="文書理解"
      filterHciLabel="人機交互"
      filterCogLabel="協調認知"
      filterSocialLabel="社会ネットワーク"
      emptyCategoryLabel="このカテゴリーの論文は見つかりませんでした。"
    />
  );
}
