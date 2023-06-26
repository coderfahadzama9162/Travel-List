export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const pencentPacked =
    items.length === 0 ? 0 : Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      You have {numItems} items on your list and you already paceked{" "}
      {packedItems}
      {`(${pencentPacked} %)`}
    </footer>
  );
}
