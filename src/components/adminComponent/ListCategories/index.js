import { Heading, Table, TableHead, TableRow, TableCell, TableBody } from '@aws-amplify/ui-react'
const ListCategories = props => {
    return (
        <>
            <Heading level={3} columnSpan={4}>List of categories</Heading>
        <Table 
            padding="1rem Orem"
            columnStart="1"
            columnEnd="-1"
            highlightOnHover={true}
            variation="striped"
        >
            <TableHead>
                <TableRow>
                    <TableCell as='th'>Id</TableCell>
                    <TableCell as='th'>Name</TableCell>
                    <TableCell as='th'>Description</TableCell>
                    <TableCell as='th' colSpan={2}>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.categories.map((category, index) => 
                    <TableRow key={category.id}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell>{category.name}</TableCell>
                        <TableCell>{category.description}</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
        </>
    );
}

export default ListCategories;