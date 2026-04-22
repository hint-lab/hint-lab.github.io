import PublicationPage from '../../components/PublicationPage';

export default function PublicationEN() {
  return (
    <PublicationPage
      title="Publications"
      summary="A year-organized list of representative papers and conference output from the lab."
      homeHref="/en"
      homeLabel="Back to Home"
      emptyYearLabel="Others"
      pdfLabel="PDF"
      urlLabel="Link"
      doiLabel="DOI"
      allYearsLabel="All Years"
    />
  );
}
