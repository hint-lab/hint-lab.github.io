import PublicationPage from '../components/PublicationPage';

export default function PublicationZH() {
  return (
    <PublicationPage
      title="研究成果"
      summary="按年份整理实验室近年来发表的代表性论文与会议成果。"
      homeHref="/"
      homeLabel="返回主页"
      emptyYearLabel="其他"
      pdfLabel="PDF 版"
      urlLabel="访问链接"
      doiLabel="DOI 链接"
      allYearsLabel="全部年份"
    />
  );
}
