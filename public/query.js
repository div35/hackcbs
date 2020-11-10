function scrollToBottom() {
    let messages = document.querySelector('#chats').lastElementChild;
    messages.scrollIntoView();
}

let reply = async () => {
    try {
        let msg = document.getElementById("msg").value;
        if (msg.trim() != "") {
            // console.log(msg);
            let reply = document.createElement("div");
            reply.setAttribute("id", "reply-human");
            let replyText = document.createTextNode(msg);
            reply.appendChild(replyText);
            document.getElementById("chats").appendChild(reply);
            document.getElementById("msg").value = ""
            scrollToBottom();
            const res = await axios.post("/api/input",{"data": msg});
            console.log(res);
            // let answer = document.createElement("div");
            // answer.setAttribute("id", "reply-bot");
            // let answerText = document.createTextNode(res);
            // answer.appendChild(answerText);
            // document.getElementById("chats").appendChild(answer);
            // scrollToBottom();
        }
        else {
            alert("Please Enter Something !!!")
        }
    }
    catch (err) {
        alert(err);
    }
}

