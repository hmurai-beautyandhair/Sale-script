import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Link,
  TextStyle,
  Card,
  ResourceItem,
  ResourceList,
  Thumbnail,
  ButtonGroup,
  Icon,
  FormLayout,
  TextField,
  Layout,
  Stack,
  Page,
  Button,
  Form,
  DisplayText,
} from "@shopify/polaris";
import actions from "../../services/index";

export default function Marketing(props) {
  const [items, setItems] = useState([]);
  const [idS, setIdes] = useState([]);
  console.log("Props", props.user);

  useEffect(() => {
    const fetchData = async () => {
      const result = await actions.listMarketing();
      setItems(result.data);
      let idS = [];
      result.data.forEach((x) => {
        idS.push({ [x._id]: false });
      });
      setIdes(idS);
    };

    fetchData();
  }, []);
  const [showForm, setshowForm] = useState(false);
  const [showEdit, setshowEdit] = useState(false);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const [title2, setTitle2] = useState("");
  const [image2, setImage2] = useState("");
  const [link2, setLink2] = useState("");
  const [description2, setDescription2] = useState("");

  const handleTitleChange = useCallback((value) => {
    console.log("Title", value);
    setTitle(value);
  }, []);
  const handleImageChange = useCallback((value) => setImage(value), []);
  const handleDescriptionChange = useCallback(
    (value) => setDescription(value),
    []
  );
  const handleLinkChange = useCallback((value) => setLink(value), []);

  const handleTitleChange2 = useCallback((value) => {
    setTitle2(value);
  }, []);
  const handleImageChange2 = useCallback((value) => setImage2(value), []);
  const handleDescriptionChange2 = useCallback(
    (value) => setDescription2(value),
    []
  );
  const handleLinkChange2 = useCallback((value) => setLink2(value), []);

  const handleSubmit = () => {
    let newState = [
      ...items,
      {
        url: link,
        title: title,
        image: image,
        description: description,
      },
    ];

    setItems(newState);
    setshowForm(false);
    setTitle("");
    setImage("");
    setDescription("");
    setLink("");
    actions
      .createLinkMarketing({
        url: link,
        title: title,
        image: image,
        description: description,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const handleSubmit2 = (id) => {
    console.log("ID", id);
    let newArr = [...idS];
    console.log("newArr", newArr);
    newArr.map((x, i) => {
      if (id in x) x[id] = false;
      return x;
    });
    console.log("update", newArr[id]);
    setIdes(newArr);
    setTitle2("");
    setImage2("");
    setDescription2("");
    setLink2("");
    actions
      .updateMarketing(
        {
          url: link2,
          title: title2,
          image: image2,
          description: description2,
        },
        id
      )
      .then((res) => {
        console.log(res.data);
      });
    window.location.reload();
  };

  const toggleForm = () => {
    setshowForm(false);
    console.log("Click");
  };
  const toggleAdd = () => {
    setshowForm(true);
    console.log("Click");
  };
  const goBack = () => {
    setshowForm(false);
    setTitle("");
    setLink("");
    setImage("");
    setDescription("");
  };
  const toggleEdit = (id) => {
    console.log("ID", id);
    let newArr = [...idS];
    console.log("newArr", newArr);
    newArr.map((x, i) => {
      if (id in x) x[id] = true;
      return x;
    });
    console.log("update", newArr[id]);
    setIdes(newArr);
  };
  const closeEdit = (id) => {
    console.log("ID", id);
    let newArr = [...idS];
    console.log("newArr", newArr);
    newArr.map((x, i) => {
      if (id in x) x[id] = false;
      return x;
    });
    console.log("update", newArr[id]);
    setIdes(newArr);
  };

  const form = (
    <Page>
      <Form onSubmit={handleSubmit}>
        <FormLayout style={{ padding: "2em" }}>
          <FormLayout.Group condensed>
            <TextField
              label="Title"
              required
              value={title}
              onChange={handleTitleChange}
            />
            <TextField
              type="url"
              label="Link"
              required
              value={link}
              onChange={handleLinkChange}
            />

            <TextField
              label="Image"
              type="url"
              required
              value={image}
              onChange={handleImageChange}
            />
          </FormLayout.Group>
          <TextField
            label="Description"
            required
            value={description}
            onChange={handleDescriptionChange}
          />

          <ButtonGroup>
            <Button
              primary
              disabled={!image || !title || !description || !link}
              submit
            >
              Submit
            </Button>
            <Button onClick={goBack}>Back</Button>
          </ButtonGroup>
        </FormLayout>
      </Form>
    </Page>
  );

  const addButton = (
    <Card>
      <center>
        <p style={{ padding: "1em" }} onClick={toggleAdd}>
          <img
            src="data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M3%203h1V1H2.5A1.5%201.5%200%20001%202.5V4h2V3zM6%203h3V1H6v2zM11%203h3V1h-3v2zM9%2019H6v-2h3v2zM11%2019h3v-2h-3v2zM17%204V3h-1V1h1.5A1.5%201.5%200%200119%202.5V4h-2zM3%2017v-1H1v1.5A1.5%201.5%200%20002.5%2019H4v-2H3zM16%2017h1v-1h2v1.5a1.5%201.5%200%2001-1.5%201.5H16v-2zM10%206a1%201%200%20011%201v2h2a1%201%200%20110%202h-2v2a1%201%200%2011-2%200v-2H7a1%201%200%20110-2h2V7a1%201%200%20011-1zM1%209V6h2v3H1zM1%2011v3h2v-3H1zM17%209V6h2v3h-2zM17%2011v3h2v-3h-2z%22%20fill%3D%22%235C5F62%22%2F%3E%3C%2Fsvg%3E"
            width="30"
            height="30"
          />
        </p>
      </center>
    </Card>
  );

  const pageMarkup = showForm ? form : addButton;

  return (
    <div>
      <div>
        <Page narrowWidth>
          <Card>
            <center>
              <div
                style={{
                  textAlign: "center",
                  padding: "1em",
                  color: "#006fbb",
                }}
              >
                <DisplayText size="large">The Marketing department</DisplayText>
              </div>
            </center>
          </Card>
          <ResourceList
            resourceName={{ singular: "customer", plural: "customers" }}
            items={items}
            renderItem={(item) => {
              const { url, title, image, description, _id } = item;
              const media = <Thumbnail source={image} size="medium" />;

              let check = idS.filter((x) => _id in x)[0]?.[_id];
              console.log(check);
              return (
                <div>
                  <ResourceItem
                    media={media}
                    accessibilityLabel={`View details for ${title}`}
                  >
                    <Stack>
                      <Stack.Item fill>
                        <h3>
                          <TextStyle variation="strong">
                            <Link url={url} external>
                              {title}
                            </Link>
                          </TextStyle>
                        </h3>
                        <div>{description}</div>
                      </Stack.Item>

                      <Stack.Item>
                        {props.user.email == "hmurai@beautyandhair.com" ||
                        props.user.email == "dfluharty@beautyandhair.com" ||
                        props.user.email == "darren@beautyandhair.com" ? (
                          <p onClick={() => toggleEdit(_id)}>
                            <img
                              style={{ cursor: "pointer" }}
                              width="15"
                              height="15"
                              src="data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M14.846%201.403l3.752%203.753.625-.626A2.653%202.653%200%200015.471.778l-.625.625zm2.029%205.472l-3.752-3.753L1.218%2015.028%200%2019.998l4.97-1.217L16.875%206.875z%22%20fill%3D%22%235C5F62%22%2F%3E%3C%2Fsvg%3E%0A"
                            />
                          </p>
                        ) : (
                          ""
                        )}
                      </Stack.Item>
                    </Stack>
                  </ResourceItem>
                  {check ? (
                    <Page>
                      <Form onSubmit={() => handleSubmit2(_id)}>
                        <FormLayout style={{ padding: "2em" }}>
                          <FormLayout.Group condensed>
                            <TextField
                              label="Title"
                              value={title2}
                              onChange={handleTitleChange2}
                            />
                            <TextField
                              type="url"
                              label="Link"
                              value={link2}
                              onChange={handleLinkChange2}
                            />

                            <TextField
                              label="Image"
                              type="url"
                              value={image2}
                              onChange={handleImageChange2}
                            />
                          </FormLayout.Group>
                          <TextField
                            label="Description"
                            value={description2}
                            onChange={handleDescriptionChange2}
                          />

                          <ButtonGroup>
                            <Button
                              primary
                              disabled={
                                !image2 || !title2 || !description2 || !link2
                              }
                              submit
                            >
                              Submit
                            </Button>
                            <Button onClick={() => closeEdit(_id)}>Back</Button>
                          </ButtonGroup>
                        </FormLayout>
                      </Form>
                    </Page>
                  ) : (
                    ""
                  )}
                </div>
              );
            }}
          />
          {console.log(idS)}
          {pageMarkup}
        </Page>
      </div>
    </div>
  );
}
