

export function Logo({ type = "default" }) {

    let path = '/images/logo.svg';
    if (type == 'muted') {
        path = '/images/logo-muted.svg';
    }

    return (

        <img src={path} alt="no-image" />
    )
}
