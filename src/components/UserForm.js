import '../styles/UserForm.scss';

export default function UserForm() {
    return (
        <section className="user-input-form">
            <h2>Info</h2>
            <form>
                <input placeholder="First Name" />
                <input placeholder="Last Name" />
                <input placeholder="District" />
                <input placeholder="Phone" />
                <input placeholder="Office" />
            </form>
        </section>
    );
}