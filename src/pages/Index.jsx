import React, { useState } from "react";
import { Container, VStack, Heading, Input, Button, List, ListItem, ListIcon, IconButton, useToast } from "@chakra-ui/react";
import { FaTrash, FaPlus, FaBook } from "react-icons/fa";

const Index = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState("");
  const toast = useToast();

  const handleAddBook = () => {
    if (newBook === "") {
      toast({
        title: "No book title entered.",
        description: "Please enter a title for the book.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setBooks([...books, newBook]);
    setNewBook("");
    toast({
      title: "Book Added.",
      description: "A new book has been added to the library.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleDeleteBook = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
    toast({
      title: "Book Removed.",
      description: "The book has been removed from the library.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} width="100%">
        <Heading>Library Management System</Heading>
        <Input placeholder="Enter book title..." value={newBook} onChange={(e) => setNewBook(e.target.value)} />
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddBook}>
          Add Book
        </Button>
        <List spacing={3} width="100%">
          {books.map((book, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
              <ListIcon as={FaBook} color="green.500" />
              {book}
              <IconButton aria-label="Delete book" icon={<FaTrash />} onClick={() => handleDeleteBook(index)} colorScheme="red" />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
