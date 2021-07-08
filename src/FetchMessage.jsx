const FetchMessage = ({data}) => {

    if (!data) return null;
  
      return (
          <div className="fetched-data-message">Data was fetched!</div>
      );
}

export default FetchMessage;