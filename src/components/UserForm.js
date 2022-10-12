import '../styles/UserForm.scss';

export default function UserForm({ politician }) {
    return (
        <section className="user-input-form">
            <h2>Info</h2>
            <p>{politician ? (politician.name) : 'First Name'}</p>
            <p>{politician ? (politician.name) : 'Last Name'}</p>
            <p>{politician ? (politician.district) : 'District'}</p>
            <p>{politician ? (politician.phone) : 'Phone'}</p>
            <p>{politician ? (politician.office) : 'Office'}</p>
        </section>
    );
}