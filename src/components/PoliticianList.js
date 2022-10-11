import '../styles/PoliticianList.scss';

export function PoliticianList() {
    return (
        <section className="politician-list">
            <p>List / Representatives</p>
            <table>
                <tbody>
                    <tr className="table-header">
                        <th>Name</th>
                        <th>Party</th>
                    </tr>
                    <tr>
                        <td className="name-cell">Ryan Nelson</td>
                        <td>R</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
