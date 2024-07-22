export default function ArchiveLayout({ children, archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id='arcive-filter'>{archive}</section>
      <section id='arcive-latest'>{latest}</section>
    </div>
  );
}
