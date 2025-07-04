"use client";
import { Select, Input, Row, Col } from "antd";

const { Option } = Select;
const { Search } = Input;

export default function FilterBar({ category, setCategory, search, setSearch, sort, setSort }) {
  return (
    <Row gutter={[16, 16]} className="mb-6">
      <Col xs={24} md={6}>
        <Select
          value={category}
          onChange={setCategory}
          style={{ width: "100%" }}
          placeholder="Filter by Category"
        >
          <Option value="all">All</Option>
          <Option value="electronics">Electronics</Option>
          <Option value="fashion">Fashion</Option>
          <Option value="books">Books</Option>
        </Select>
      </Col>

      <Col xs={24} md={12}>
        <Search
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search product name"
          enterButton
        />
      </Col>

      <Col xs={24} md={6}>
        <Select
          value={sort}
          onChange={setSort}
          style={{ width: "100%" }}
          placeholder="Sort by"
        >
          <Option value="default">Default</Option>
          <Option value="lowToHigh">Price: Low to High</Option>
          <Option value="highToLow">Price: High to Low</Option>
        </Select>
      </Col>
    </Row>
  );
}
