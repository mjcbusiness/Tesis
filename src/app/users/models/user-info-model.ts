export interface Attribute {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    attribute_group_id: string;
    attribute_group_name: string;
    value_struct: any;
    values: Value[];
    source: number;
    value_type: string;
  }
  
  export interface Value {
    id: string;
    name: string;
    struct: any;
    source: number;
  }
  
  export interface Installments {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
  }
  
  export interface Shipping {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    mode: string;
    tags: string[];
    benefits: any;
    promise: any;
    shipping_score: number;
  }
  
  export interface Result {
    id: string;
    title: string;
    condition: string;
    thumbnail_id: string;
    catalog_product_id: string;
    listing_type_id: string;
    sanitized_title: string;
    permalink: string;
    buying_mode: string;
    site_id: string;
    category_id: string;
    domain_id: string;
    thumbnail: string;
    currency_id: string;
    order_backend: number;
    price: number;
    original_price: any;
    sale_price: any;
    available_quantity: number;
    official_store_id: number;
    official_store_name: string;
    use_thumbnail_id: boolean;
    accepts_mercadopago: boolean;
    shipping: Shipping;
    stop_time: string;
    seller: SellerInfo;
    attributes: Attribute[];
    installments: Installments;
    winner_item_id: any;
    catalog_listing: boolean;
    discounts: any;
    promotions: any[];
    inventory_id: string;
  }
  
  export interface Seller {
    id: number;
    nickname: string;
    registration_date: string;
    tags: string[];
    permalink: string;
    seller_reputation: SellerReputation;
  }
  
  export interface SellerInfo {
    id: number;
    nickname: string;
  }
  
  export interface SellerReputation {
    level_id: string;
    power_seller_status: any;
    transactions: Transactions;
    metrics: Metrics;
  }
  
  export interface Transactions {
    canceled: number;
    completed: number;
    period: string;
    ratings: Ratings;
    total: number;
  }
  
  export interface Ratings {
    negative: number;
    neutral: number;
    positive: number;
  }
  
  export interface Metrics {
    sales: Sales;
    claims: Claims;
    delayed_handling_time: DelayedHandlingTime;
    cancellations: Cancellations;
  }
  
  export interface Sales {
    period: string;
    completed: number;
  }
  
  export interface Claims {
    period: string;
    rate: number;
    value: number;
  }
  
  export interface DelayedHandlingTime {
    period: string;
    rate: number;
    value: number;
  }
  
  export interface Cancellations {
    period: string;
    rate: number;
    value: number;
  }
  
  export interface Paging {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
  }
  
  export interface Sort {
    id: string;
    name: string;
  }
  
  export interface AvailableSort {
    id: string;
    name: string;
  }
  
  export interface FilterValue {
    id: string;
    name: string;
    results: number;
  }
  
  export interface Filter {
    id: string;
    name: string;
    type: string;
    values: FilterValue[];
  }
  
  export interface PdpTracking {
    group: boolean;
    product_info: ProductInfo[];
  }
  
  export interface ProductInfo {
    id: string;
    score: number;
    status: string;
  }
  
  export interface ApiResponse {
    site_id: string;
    seller: Seller;
    country_default_time_zone: string;
    paging: Paging;
    results: Result[];
    sort: Sort;
    available_sorts: AvailableSort[];
    filters: any[];
    available_filters: Filter[];
    pdp_tracking: PdpTracking;
    user_context: any;
  }

  export interface AllDataShops{
    dataShops:ApiResponse[];
  }
  