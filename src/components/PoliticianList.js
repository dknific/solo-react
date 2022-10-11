import '../styles/PoliticianList.scss';

export function PoliticianList() {
    return (
        <section className="politician-list">
            <h2>List / Representatives</h2>
            <table>
                <tbody>
                    <tr className="table-header">
                        <th>Name</th>
                        <th>Party</th>
                    </tr>
                    <tr className="table-data-row">
                        <td className="name-cell">Ryan Nelson</td>
                        <td>R</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
