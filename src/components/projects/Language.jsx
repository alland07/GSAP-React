const Language = () => {
  const languagesTab = ['TS','React','HTML','CSS','PHP','Node'];
  const randomMessage = languagesTab[Math.floor(Math.random() * languagesTab.length)];
  return(
    <>
      <span>{randomMessage}</span>
    </>
  );
}

export default Language;
