const {lease}=require("../..//controller/land/lease")
const {set_lease_true}=require("../..//controller/land/set_lease_true")
const {lands_for_lease}=require("../..//controller/land/lands_for_lease")


const {parking_upload,parking}=require("../..//controller/land/parking_upload")
const {lease_profile}=require("../..//controller/profile/lease")
const {park_profile}=require("../..//controller/profile/park")

const {hotoptions}=require("../..//controller/land/hotoptions")


const router = require("express").Router();

router.post("/lease", lease);
router.post("/set_lease_true", set_lease_true);
router.get("/lands_for_lease", lands_for_lease);

router.post("/parking_upload", parking_upload);
router.post("/parking", parking);

router.get("/lease_profile", lease_profile);
router.get("/park_profile", park_profile);

router.get("/hotoptions", hotoptions);

module.exports = router;