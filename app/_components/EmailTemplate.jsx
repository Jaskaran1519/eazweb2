const EmailTemplate = ({ name, phone, message, email }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>New Message from {name}</h1>
      <p style={styles.text}>Phone: {phone}</p>
      <p style={styles.text}>Email: {email}</p>
      <p style={styles.text}>Message:</p>
      <p style={styles.message}>{message}</p>
      <footer style={styles.footer}>
        <p style={styles.footerText}>Best Regards,</p>
        <p style={styles.footerText}>The Acme Team</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '"Arial", sans-serif',
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.5",
  },
  message: {
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.5",
    marginTop: "10px",
  },
  footer: {
    marginTop: "20px",
    borderTop: "1px solid #ddd",
    paddingTop: "10px",
  },
  footerText: {
    fontSize: "14px",
    color: "#999",
  },
};

export default EmailTemplate;
