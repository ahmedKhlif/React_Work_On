import React, { useState } from 'react';
import { TextField, RadioGroup, FormControlLabel, Radio, FormControl, InputLabel, MenuItem, Select, Grid, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandCircleDown';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { AppLinksByProfile } from '../sections/@dashboard/app';








const ProfileUser = () => {
  const [name, setName] = useState('John Smith');
  const [profilePicture, setProfilePicture] = useState('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp');
  const [title, setTitle] = useState('Full Stack Developer');
  const [address, setAddress] = useState('Bay Area, San Francisco, CA');
  const [frame, setFrame] = useState('rounded-circle');
  const [links, setLinks] = useState([
    {
      label: "Link 1",
      icon: "fas fa-link",
      color: "#FF0000",
      order: 0,
      active: true,
    },
    {
      label: "Link 2",
      icon: "fas fa-link",
      color: "#00FF00",
      order: 1,
      active: true,
    },
    {
      label: "Link 3",
      icon: "fas fa-link",
      color: "#0000FF",
      order: 2,
      active: true,
    },
  ]);
  const [newLink, setNewLink] = useState({
    label: "",
    icon: "",
    color: "",
    order: 0,
    active: true,
  });

  const handleSave = () => {
    // Handle saving the user settings
    console.log('Name:', name);
    console.log('Profile Picture:', profilePicture);
    console.log('Title:', title);
    console.log('Address:', address);
    console.log('Frame:', frame);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.value);
  };

  const handleFrameChange = (event) => {
    setFrame(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleAddLink = () => {
    setLinks((prevLinks) => {
      const insertIndex = Math.min(prevLinks.length, newLink.order);
      const updatedLinks = [
        ...prevLinks.slice(0, insertIndex),
        { ...newLink, active: newLink.active },
        ...prevLinks.slice(insertIndex),
      ];
      const reorderedLinks = updatedLinks.map((link, index) => ({
        ...link,
        order: index,
      }));
      return reorderedLinks;
    });

    setNewLink({
      label: '',
      icon: '',
      color: '',
      order: 0,
      active: true,
    });
  };

  const handleNewLinkChange = (event) => {
    const { name, value } = event.target;
    setNewLink((prevNewLink) => ({
      ...prevNewLink,
      [name]: value,
    }));
    console.log(event.target.name+ event.target.value);
  };

  const handleOrderChange = (event, index) => {
    const updatedLinks = [...links];
    updatedLinks[index].order = Number(event.target.value);
    setLinks(updatedLinks);
  };

  // const [show, setShow] = useState(false);
  // const handleOpen = () => {
  //   setShow(!show); // Toggle accordion
  // }; 
   
// hey 

  return (
    <Grid container spacing={2}>
    <Grid elevation={12} item xs={12} md={5}>
    <div  className="sticky-top">
          <div className="card mb-4">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-11 col-xl-7">
              <div className="card">
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: 200 }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: 150 }}
                  >
                    <img
                      src={profilePicture}
                      alt="Profile"
                      className={frame}
                      style={{ width: 150, zIndex: 1 }}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: 1 }}
                    >
                      Edit profile
                    </button>
                  </div>
                  <div className="ms-3" style={{ marginTop: 130 }}>
                    <h5>{name}</h5>
                    <p  className="text-muted mb-4">{title}</p>
                    <p className="text-muted mb-4">{address}</p>

                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <p className="mb-1 h5">253</p>
                      <p className="small text-muted mb-0">Photos</p>
                    </div>
                    <div className="px-3">
                      <p className="mb-1 h5">1026</p>
                      <p className="small text-muted mb-0">Followers</p>
                    </div>
                    <div>
                      <p className="mb-1 h5">478</p>
                      <p className="small text-muted mb-0">Following</p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div
                      className="p-4"
                      style={{ backgroundColor: "#f8f9fa" }}
                    >
                      <p className="font-italic mb-1">Web Developer</p>
                      <p className="font-italic mb-1">Lives in New York</p>
                      <p className="font-italic mb-0">Photographer</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Recent photos</p>
                    <p className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </p>
                  </div>
                  <div className="row g-2">
                    <div className="col mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                        alt="ahla 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                        alt="AHLA 2"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                        alt="ahla  3"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                        alt="ahla  4"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
          <Grid  container spacing={2}>
            {links.map((link, index) => (
              <Grid item xs={12} key={index}>
                <AppLinksByProfile
                  title={link.label}
                  list={[
                    {
                      name: link.label,
                      value: 323234,
                      icon: (<i className={link.icon} style={{ color: link.color }} />),
                      link: link.label,
                    },
                  ]}
                />
              </Grid>
            ))}
          </Grid>
          <Button variant="contained" onClick={handleAddLink}>
            Add Link
          </Button>
        </Grid>


      <Grid   item xs={12} md={8}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          User Settings
          </Typography>
        </AccordionSummary>


      {/* <div className="accordian-header" onClick={handleOpen}>
          <div>User Settings </div>
          <div className="sign">{show ? '-' : '+'}</div>
          {show && ( */}
          {/* // <h3>User Settings</h3> */}
          <AccordionDetails>
          <Typography>


        <div className="card mb-4" >
          
          
         {/* onClick={handleOpen} */}
          <div className="card-body"  >
            
          
          
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Name</p>
              </div>
              <div className="col-sm-9">
                <TextField name="name" label="Name" value={name} onChange={handleNameChange} />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Profile Picture</p>
              </div>
              <div className="col-sm-9">
                <TextField name="pic" label="Profile Picture" value={profilePicture} onChange={handleProfilePictureChange} />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Frame Picture</p>
              </div>
              <div className="col-sm-9">
                <FormControl fullWidth>
                  <Select
                    labelId="frame-label"
                    id="frame-select"
                    value={frame}
                    onChange={handleFrameChange}
                  >
                    <MenuItem value="rounded-circle  img-fluid  mt-4 mb-2">
                      <img src={profilePicture} alt="First Option" className="rounded-circle"
                        style={{ width: 60, marginLeft: "auto", marginRight: "auto" }}
                      />
                    </MenuItem>
                    <MenuItem value="rounded  img-fluid  mt-4 mb-2">
                      <img src={profilePicture} alt="Second Option" className="rounded"
                        style={{ width: 60, marginLeft: "auto", marginRight: "auto" }}
                      />
                    </MenuItem>
                    <MenuItem value="rounded-0  img-fluid  mt-4 mb-2">
                      <img src={profilePicture} alt="Third Option" className="rounded-0"
                        style={{ width: 60, marginLeft: "auto", marginRight: "auto" }}
                      />
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Title</p>
              </div>
              <div className="col-sm-9">
                <TextField name="Title" label="Title" value={title} onChange={handleTitleChange} />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <TextField name="address" label="Address" value={address} onChange={handleAddressChange} />
              </div>
            </div>
            
          </div>
        </div>
        </Typography>
        </AccordionDetails>
        </Accordion>



                {/* )}

      </div> */}
        
        
        <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Links Settings 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>


        {/* <h3>Links Settings</h3> */}
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Give me your link</p>
              </div>
              <div className="col-sm-9">
                <TextField
                  name="label"
                  label="Link Label"
                  value={newLink.label}
                  onChange={handleNewLinkChange}
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Icon</p>
              </div>
                <div className="col-sm-9">
                  <FormControl fullWidth>
                    <Select
                      labelId="icon-label"
                      id="icon-select"
                      onChange={handleNewLinkChange}
                    >
                      <MenuItem value="bi-github">
                        <img src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} alt="First Option"
                          style={{ width: 60, marginLeft: "auto", marginRight: "auto" }}
                        />
                      </MenuItem>
                      <MenuItem value="fas fa-link">
                        <img src={"https://cdn-icons-png.flaticon.com/512/174/174855.png"} alt="Second Option"
                          style={{ width: 60, marginLeft: "auto", marginRight: "auto" }}
                        />
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Color</p>
              </div>
              <div className="col-sm-9">
                <input
                  type="color"
                  name="color"
                  value={newLink.color}
                  onChange={handleNewLinkChange}
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Order</p>
              </div>
              <div className="col-sm-9">
                <TextField
                  type="number"
                  name="order"
                  label="Order"
                  value={newLink.order}
                  onChange={handleNewLinkChange}
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Active</p>
              </div>
              <div className="col-sm-9">
                <RadioGroup name="active" value={String(newLink.active)} onChange={handleNewLinkChange}>
                  <FormControlLabel value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
        </Typography>
        </AccordionDetails>
        </Accordion>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProfileUser;



