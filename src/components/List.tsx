import React, { useEffect, useState } from "react";
import { Badge, Card, Container, Grid } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

export default function List({ ListData }: { ListData: any[] }) {
  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          <Grid.Container gap={2}>
            {ListData.map((list: any, index: number) => {
              return (
                <Grid key={list.name + index} xs={12} md={6}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card
                      isHoverable
                      variant="flat"
                      css={{
                        height: "100%",
                      }}
                    >
                      {" "}
                      <Card.Body>
                        <Grid.Container gap={2}>
                          <Grid xs={12} md={4}>
                            <img
                              alt="shoes image"
                              src={list.image ? list.image : "./images1.jpg"}
                              style={{
                                borderRadius: 20,
                              }}
                            />
                          </Grid>
                          <Grid xs={12} md={8}>
                            <Grid.Container gap={2}>
                              <Grid xs={12} justify="space-between">
                                <Text h4>
                                  {list.name}
                                  &nbsp;
                                  <Badge color="success" variant="default">
                                    Popularity -- {list.popularity}
                                  </Badge>
                                </Text>
                                <Text css={{ color: "$accents8" }}>
                                  {new Date(list.date).getDate() +
                                    "/" +
                                    new Date(list.date).getMonth() +
                                    "/" +
                                    new Date(list.date).getFullYear()}
                                </Text>
                              </Grid>
                              <Grid xs={12}>
                                <Text css={{ color: "$accents8" }}>
                                  {list.discription}
                                </Text>
                              </Grid>
                            </Grid.Container>
                          </Grid>
                        </Grid.Container>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid.Container>
        </AnimatePresence>
      </motion.div>
    </>
  );
}
