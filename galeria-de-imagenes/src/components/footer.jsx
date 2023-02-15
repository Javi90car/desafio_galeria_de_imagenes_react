import Alert from 'react-bootstrap/Alert';

function Footer({texto}) {
  return (
    <div className='footer'>
      {[
        'info',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          <h4 className='texto'>{texto}</h4>
        </Alert>
      ))}
    </div>
  );
}

export default Footer;