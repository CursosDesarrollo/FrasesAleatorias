const helperFetch = async (url) => {
  const abortController = new AbortController();
  const signal = abortController.signal;

  try {
    setTimeout(()=>abortController.abort(),3000);
    const res = await fetch(url,{signal});
    if(!res.ok) throw({
        message : "Error En La Peticion",
        status: res.status || "000",
        statusText : res.statusText || "Error Inesperado"
    });
    const json = await res.json();
    return {data: json};
  }catch(error) {
    return {error};
  }
}

export {helperFetch};