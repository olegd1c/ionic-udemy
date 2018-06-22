export interface Quote {
    id: string;
    person: string;
    text: string;
}

export interface Book {
    category: string;
    quotes: Quote[];
    icon: string;
}