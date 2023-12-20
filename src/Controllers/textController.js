// console.log(req.session.userId)
const submitText = async (req, res) => {
  try {
    const data = req.body;
    const { messageText } = data;

    res.cookie("myCookieValue", messageText);

    // const myCookieValue = req.cookies["myCookieValue"];
    // console.log(myCookieValue);
    // res.send(myCookieValue);
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const searchText = async (req, res) => {
  try {
    const searchMessageText = req.query.searchMessageText;
    const searchedCookie = req.cookies.myCookieValue;

    if (searchedCookie) {
      if (searchedCookie.includes(searchMessageText)) {
        // res.send(`Found in Cookie: ${inputCookie}`);
        return res.render("Logout", { data: searchedCookie });
      } else {
        // res.send('Not found in Cookie.');
        return res.render("Logout", { data: "no message found" });
      }
    } else {
      // res.send('No inputCookie found in cookies.');
      return res.render("Logout", { data: "no message found" });
    }
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const clearCookies = async (req, res) => {
  try {
    // Clear all cookies.
    res.clearCookie();

    // Send a response to the client.
    res.send("All cookies have been cleared.");
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { submitText, searchText, clearCookies };
