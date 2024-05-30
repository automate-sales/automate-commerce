import Table from "../../components/admin/table";

export default function Page({ params: { lang }}: { params: { lang: string } }){
    return <div className="py-8 px-16">
        <h1 className="text-center text-2xl pb-5"> Products </h1>
        <Table model='product' fields={{
            id: {
                name: 'ID',
                type:'id'
            },
            title: {
                name: 'Title',
                type:'translated-text'
            },
            description: {
                name: 'Description',
                type:'translated-text'
            },
            price: {
                name: 'Price',
                type:'number'
            },
            stock: {
                name: 'Stock',
                type:'number'
            },
            images: {
                name: 'Images',
                type:'images'
            },
            subcategoryId: {
                name: 'Subcategory',
                type:'parent'
            },
            tags: {
                name: 'Tags',
                type:'text'
            },
            status: {
                name: 'Status',
                type:'text'
            },
            createdAt: {
                name: 'Created At',
                type:'date'
            }
        }} lang={lang}/>
    </div>
}