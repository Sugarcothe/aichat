import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Box, CardMedia, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "80vh",
  bgcolor: "#151515",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  //   overflowY: "auto",
};

const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return `${title.substring(0, maxLength)}...`;
  }
  return title;
};

const ChatListMobile = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  if (isPending) return <div className="chatListMobile">Loading...</div>;
  if (error) return <div className="chatListMobile">Something went wrong!</div>;

  return (
    <Box sx={style}>
      <Box
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        className="chatListMobile"
      >
        <Typography variant="h6">DASHBOARD</Typography>
        <Link to="/dashboard">Create a new Chat</Link>
        <Link to="/">Explore CuriousCat AI</Link>
        <Link to="/">Contact</Link>
        <hr />

        <Typography variant="h6" sx={{mt: "20px"}}>
          RECENT CHATS
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {data?.map((chat) => (
            <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
              {truncateTitle(chat.title, 30)}
            </Link>
          ))}
        </Box>

        <hr />
        <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
          <CardMedia
            component="img"
            src="/logo.png"
            alt="Upgrade"
            sx={{ width: "50px", mr: 2 }}
          />
          <Typography variant="body2">Upgrade to CuriosCat AI Pro</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatListMobile;
