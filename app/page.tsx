const products = [
  { id: 1, name: "Áo thun", price: 120000 },
  { id: 2, name: "Giày thể thao", price: 450000 },
  { id: 3, name: "Balo", price: 250000 },
];

export default function ProductsPage() {
  return (
    <main style={{ padding: "32px" }}>
      <h1>Danh sách sản phẩm</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} – {product.price.toLocaleString("vi-VN")}đ
          </li>
        ))}
      </ul>
    </main>
  );
}
