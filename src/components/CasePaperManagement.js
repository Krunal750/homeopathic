import { Form, Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Formik } from 'formik';  //to get the form data

function CasePaperManagement() {

  const handlePrint = () => {
    window.print();
  };
  return (
    <Container className="mt-4">
      <h1>Case Paper Management</h1>
      <Formik
        onSubmit={(values) => {
          // Handle form submission (values contain form data)
          console.log(values);
        }}
        initialValues={{
          nameOfPhysician: '',
          name: '',
          education: '',
          date: '',
          day: '',
          age: '',
          sex: '',
          status: '',
          mob: '',
          add: '',
          chiefComplaints: Array(20).fill({
            location: '',
            sensation: '',
            modality: '',
            concomitant: '',
          }),
          mentals: '',
          anger: '',
          fear: '',
          observation: '',
          pho: '',
          homeopathicMedicine: '',
          physicalAppearance: '',
          expression: '',
          hunger: '',
          craving: '',
          craving2: '',
          perspiration: '',
          appetite: '',
          thirst: '',
          urin: '',
          stool: '',
          sleep: '',
          menses: '',
          regIrreg: '',
          duration: '',
          quantity: '',
          clots: '',
          stains: '',
          odor: '',
          leucorrhoea: {
            color: '',
            quantity: '',
            odor: '',
          },
          assoCo: '',
          pregnancy: {
            gpaLsd: '',
            delivery: '',
            birthWeight: '',
          },
          complication: '',
          babyMilestone: '',
          thermals: {
            fan: '',
            covering: '',
            bath: '',
            s: '',
            w: '',
            r: '',
          },
          ridingAgg: '',
          sunAgg: '',
          terms: true, // Add a terms checkbox field
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {/* Add your form fields here */}
            {/* Physician Selection */}
            <Form.Group controlId="nameOfPhysician">
              <Form.Label>Name of Physician</Form.Label>
              <Form.Control
                as="select"
                name="nameOfPhysician"
                value={values.nameOfPhysician}
                onChange={handleChange}
                isInvalid={touched.nameOfPhysician && !!errors.nameOfPhysician}
              >
                <option value="">Select Physician</option>
                <option value="Dr. Vivek Ghadge">Dr. Vivek Ghadge</option>
                <option value="Dr. Usha V. Ghadge">Dr. Usha V. Ghadge</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.nameOfPhysician}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Name */}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={touched.name && !!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Education */}
            <Form.Group controlId="education">
              <Form.Label>Education</Form.Label>
              <Form.Control
                type="text"
                name="education"
                value={values.education}
                onChange={handleChange}
                isInvalid={touched.education && !!errors.education}
              />
              <Form.Control.Feedback type="invalid">
                {errors.education}
              </Form.Control.Feedback>
              </Form.Group>

              {/* date */}
              <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date" // Set the input type to 'date'
                name="date"
                value={values.date}
                onChange={handleChange}
                isInvalid={touched.date && !!errors.date}
              />
            </Form.Group>

            {/* Day */}
            <Form.Group>
              <Form.Label>Day</Form.Label>
              <Form.Control
                type="text" // Set the input type to 'text'
                name="day"
                value={values.day}
                onChange={handleChange}
                isInvalid={touched.day && !!errors.day}
              />
            </Form.Group>

            {/* Informant */}
            <Form.Group controlId="informant">
              <Form.Label>Informant</Form.Label>
              <Form.Control
                type="text"
                name="informant"
                value={values.informant}
                onChange={handleChange}
                isInvalid={touched.informant && !!errors.informant}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
              </Form.Group>

            {/* Age */}
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text" // You can use 'number' if you want to restrict it to numbers only
                name="age"
                value={values.age}
                onChange={handleChange}
                isInvalid={touched.age && !!errors.age}
              />
            </Form.Group>

            
            {/* sex */}
            <Form.Group controlId="sex">
              <Form.Label>Sex</Form.Label>
              <Form.Control
                type="text"
                name="sex"
                value={values.sex}
                onChange={handleChange}
                isInvalid={touched.sex && !!errors.sex}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
              </Form.Group>


            {/* Status/Married */}
            <Form.Group controlId="status">
              <Form.Label>Status/Married</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={values.status}
                onChange={handleChange}
                isInvalid={touched.status && !!errors.status}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Mob Number */}
            <Form.Group controlId="mob">
              <Form.Label>Mob Number</Form.Label>
              <Form.Control
                type="integer"
                name="mob"
                value={values.mob}
                onChange={handleChange}
                isInvalid={touched.mob && !!errors.mob}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Status/Married */}
            <Form.Group controlId="add">
              <Form.Label>Add</Form.Label>
              <Form.Control
                type="text"
                name="add"
                value={values.add}
                onChange={handleChange}
                isInvalid={touched.add && !!errors.add}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>


           
            {/* Chief Complaints Table */}
            <Form.Group controlId="chiefComplaints">
              <Form.Label><h2>Chief Complaints</h2></Form.Label>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>Location</th>
                    <th>Sensation</th>
                    <th>Modality</th>
                    <th>Concomitant</th>
                  </tr>
                </thead>
                <tbody>
                  {values.chiefComplaints.map((complaint, index) => (
                    <tr key={index}>
                      <td>
                        <Form.Control
                          type="text"
                          name={`chiefComplaints[${index}].location`}
                          value={complaint.location}
                          onChange={handleChange}
                          isInvalid={touched.chiefComplaints && touched.chiefComplaints[index] && !!errors.chiefComplaints && !!errors.chiefComplaints[index]?.location}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.chiefComplaints && errors.chiefComplaints[index]?.location}
                        </Form.Control.Feedback>
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          name={`chiefComplaints[${index}].sensation`}
                          value={complaint.sensation}
                          onChange={handleChange}
                          isInvalid={touched.chiefComplaints && touched.chiefComplaints[index] && !!errors.chiefComplaints && !!errors.chiefComplaints[index]?.sensation}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.chiefComplaints && errors.chiefComplaints[index]?.sensation}
                        </Form.Control.Feedback>
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          name={`chiefComplaints[${index}].modality`}
                          value={complaint.modality}
                          onChange={handleChange}
                          isInvalid={touched.chiefComplaints && touched.chiefComplaints[index] && !!errors.chiefComplaints && !!errors.chiefComplaints[index]?.modality}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.chiefComplaints && errors.chiefComplaints[index]?.modality}
                        </Form.Control.Feedback>
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          name={`chiefComplaints[${index}].concomitant`}
                          value={complaint.concomitant}
                          onChange={handleChange}
                          isInvalid={touched.chiefComplaints && touched.chiefComplaints[index] && !!errors.chiefComplaints && !!errors.chiefComplaints[index]?.concomitant}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.chiefComplaints && errors.chiefComplaints[index]?.concomitant}
                        </Form.Control.Feedback>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              </Form.Group>

            {/* Physical Appearence */}
            <Form.Group controlId="physicalAppearance">
              <Form.Label>Physical Appearence:</Form.Label>
              <Form.Control
                type="text"
                name="physicalAppearance"
                value={values.physicalAppearance}
                onChange={handleChange}
                isInvalid={touched.physicalAppearance && !!errors.physicalAppearance}
              />
              <Form.Control.Feedback type="invalid">
                {errors.physicalAppearance}
              </Form.Control.Feedback>
              </Form.Group>

            {/* Expression */}
            <Form.Group controlId="expression">
              <Form.Label>Expression</Form.Label>
              <Form.Control
                type="text"
                name="expression"
                value={values.expression}
                onChange={handleChange}
                isInvalid={touched.expression && !!errors.expression}
              />
              <Form.Control.Feedback type="invalid">
                {errors.expression}
              </Form.Control.Feedback>
              </Form.Group>

            {/* Hunger */}
            <Form.Group controlId="name">
              <Form.Label>Hunger</Form.Label>
              <Form.Control
                type="text"
                name="hunger"
                value={values.hunger}
                onChange={handleChange}
                isInvalid={touched.hunger && !!errors.hunger}
              />
              <Form.Control.Feedback type="invalid">
                {errors.hunger}
              </Form.Control.Feedback>
              </Form.Group>

            {/* Craving */}
            <Form.Group controlId="name">
              <Form.Label>Craving</Form.Label>
              <Form.Control
                type="text"
                name="craving"
                value={values.craving}
                onChange={handleChange}
                isInvalid={touched.craving && !!errors.craving}
              />
              <Form.Control.Feedback type="invalid">
                {errors.craving}
              </Form.Control.Feedback>
              </Form.Group>

            {/* Craving2 */}
            <Form.Group controlId="craving2">
              <Form.Label>Craving2</Form.Label>
              <Form.Control
                type="text"
                name="craving2"
                value={values.craving2}
                onChange={handleChange}
                isInvalid={touched.craving2 && !!errors.craving2}
              />
              <Form.Control.Feedback type="invalid">
                {errors.craving2}
              </Form.Control.Feedback>
              </Form.Group>

            {/* Perspiration */}
            <Form.Group controlId="perspiration">
              <Form.Label>Perspiration</Form.Label>
              <Form.Control
                type="text"
                name="perspiration"
                value={values.perspiration}
                onChange={handleChange}
                isInvalid={touched.perspiration && !!errors.perspiration}
              />
              <Form.Control.Feedback type="invalid">
                {errors.perspiration}
              </Form.Control.Feedback>
              </Form.Group>

            {/* Appetite */}
            <Form.Group controlId="appetite">
              <Form.Label>Appetite</Form.Label>
              <Form.Control
                type="text"
                name="appetite"
                value={values.appetite}
                onChange={handleChange}
                isInvalid={touched.appetite && !!errors.appetite}
              />
              <Form.Control.Feedback type="invalid">
                {errors.appetite}
              </Form.Control.Feedback>
              </Form.Group>

            {/* Thirst */}
            <Form.Group controlId="thirst">
              <Form.Label>Thirst</Form.Label>
              <Form.Control
                type="text"
                name="thirst"
                value={values.thirst}
                onChange={handleChange}
                isInvalid={touched.thirst && !!errors.thirst}
              />
              <Form.Control.Feedback type="invalid">
                {errors.thirst}
              </Form.Control.Feedback>
              </Form.Group>

            {/* Urin */}
            <Form.Group controlId="urin">
              <Form.Label>Urin</Form.Label>
              <Form.Control
                type="text"
                name="urin"
                value={values.urin}
                onChange={handleChange}
                isInvalid={touched.urin && !!errors.urin}
              />
              <Form.Control.Feedback type="invalid">
                {errors.urin}
              </Form.Control.Feedback>
              </Form.Group>

            {/* Stool */}
            <Form.Group controlId="stool">
              <Form.Label>Stool</Form.Label>
              <Form.Control
                type="text"
                name="stool"
                value={values.stool}
                onChange={handleChange}
                isInvalid={touched.stool && !!errors.stool}
              />
              <Form.Control.Feedback type="invalid">
                {errors.stool}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Sleep */}
            <Form.Group controlId="sleep">
              <Form.Label>Sleep</Form.Label>
              <Form.Control
                type="text"
                name="sleep"
                value={values.sleep}
                onChange={handleChange}
                isInvalid={touched.sleep && !!errors.sleep}
              />
              <Form.Control.Feedback type="invalid">
                {errors.stool}
              </Form.Control.Feedback>
            </Form.Group>

            {/* menses */}
            <Form.Group controlId="menses">
              <Form.Label>menses</Form.Label>
              <Form.Control
                type="text"
                name="menses"
                value={values.menses}
                onChange={handleChange}
                isInvalid={touched.menses && !!errors.menses}
              />
              <Form.Control.Feedback type="invalid">
                {errors.stool}
              </Form.Control.Feedback>
            </Form.Group>

            {/* regIrreg */}
            <Form.Group controlId="regIrreg">
              <Form.Label>RegIrreg</Form.Label>
              <Form.Control
                type="text"
                name="regIrreg"
                value={values.regIrreg}
                onChange={handleChange}
                isInvalid={touched.regIrreg && !!errors.regIrreg}
              />
              <Form.Control.Feedback type="invalid">
                {errors.regIrreg}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Duration */}
            <Form.Group controlId="duration">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                name="duration"
                value={values.duration}
                onChange={handleChange}
                isInvalid={touched.duration && !!errors.duration}
              />
              <Form.Control.Feedback type="invalid">
                {errors.duration}
              </Form.Control.Feedback>
            </Form.Group>

             {/* quantity */}
             <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                name="quantity"
                value={values.quantity}
                onChange={handleChange}
                isInvalid={touched.quantity && !!errors.quantity}
              />
              <Form.Control.Feedback type="invalid">
                {errors.quantity}
              </Form.Control.Feedback>
            </Form.Group>

             {/* clots */}
             <Form.Group controlId="clots">
              <Form.Label>Clots</Form.Label>
              <Form.Control
                type="text"
                name="clots"
                value={values.clots}
                onChange={handleChange}
                isInvalid={touched.clots && !!errors.clots}
              />
              <Form.Control.Feedback type="invalid">
                {errors.clots}
              </Form.Control.Feedback>
            </Form.Group>

             {/* stains */}
             <Form.Group controlId="stains">
              <Form.Label>Stains</Form.Label>
              <Form.Control
                type="text"
                name="stains"
                value={values.stains}
                onChange={handleChange}
                isInvalid={touched.stains && !!errors.stains}
              />
              <Form.Control.Feedback type="invalid">
                {errors.stains}
              </Form.Control.Feedback>
            </Form.Group>

             {/* odor */}
             <Form.Group controlId="odor">
              <Form.Label>Odor</Form.Label>
              <Form.Control
                type="text"
                name="odor"
                value={values.odor}
                onChange={handleChange}
                isInvalid={touched.odor && !!errors.odor}
              />
              <Form.Control.Feedback type="invalid">
                {errors.odor}
              </Form.Control.Feedback>
            </Form.Group>

             {/* leucorrhoea */}
             <Form.Group controlId="leucorrhoea">
              <Form.Label>Leucorrhoea</Form.Label>
              <Form.Control
                type="text"
                name="leucorrhoea"
                value={values.leucorrhoea}
                onChange={handleChange}
                isInvalid={touched.leucorrhoea && !!errors.leucorrhoea}
              />
              <Form.Control.Feedback type="invalid">
                {errors.leucorrhoea}
              </Form.Control.Feedback>
            </Form.Group>

             {/* color */}
             <Form.Group controlId="color">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                name="color"
                value={values.color}
                onChange={handleChange}
                isInvalid={touched.color && !!errors.color}
              />
              <Form.Control.Feedback type="invalid">
                {errors.color}
              </Form.Control.Feedback>
            </Form.Group>

             {/* quantity */}
             <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                name="quantity"
                value={values.quantity}
                onChange={handleChange}
                isInvalid={touched.quantity && !!errors.quantity}
              />
              <Form.Control.Feedback type="invalid">
                {errors.quantity}
              </Form.Control.Feedback>
            </Form.Group>

             {/* odor */}
             <Form.Group controlId="odor">
              <Form.Label>Odor</Form.Label>
              <Form.Control
                type="text"
                name="odor"
                value={values.odor}
                onChange={handleChange}
                isInvalid={touched.odor && !!errors.odor}
              />
              <Form.Control.Feedback type="invalid">
                {errors.odor}
              </Form.Control.Feedback>
            </Form.Group>

            {/* assoCo */}
            <Form.Group controlId="assoCo">
              <Form.Label>AssoCo</Form.Label>
              <Form.Control
                type="text"
                name="assoCo"
                value={values.assoCo}
                onChange={handleChange}
                isInvalid={touched.assoCo && !!errors.assoCo}
              />
              <Form.Control.Feedback type="invalid">
                {errors.assoCo}
              </Form.Control.Feedback>
            </Form.Group>

            {/* pregnancy */}
            <Form.Group controlId="pregnancy">
              <Form.Label>Pregnancy</Form.Label>
              <Form.Control
                type="text"
                name="pregnancy"
                value={values.pregnancy}
                onChange={handleChange}
                isInvalid={touched.pregnancy && !!errors.pregnancy}
              />
              <Form.Control.Feedback type="invalid">
                {errors.pregnancy}
              </Form.Control.Feedback>
            </Form.Group>

            {/* gpaLsd */}
            <Form.Group controlId="gpaLsd">
              <Form.Label>gpaLsd</Form.Label>
              <Form.Control
                type="text"
                name="gpaLsd"
                value={values.gpaLsd}
                onChange={handleChange}
                isInvalid={touched.gpaLsd && !!errors.gpaLsd}
              />
              <Form.Control.Feedback type="invalid">
                {errors.gpaLsd}
              </Form.Control.Feedback>
            </Form.Group>

            {/* delivery */}
            <Form.Group controlId="delivery">
              <Form.Label>Delivery</Form.Label>
              <Form.Control
                type="text"
                name="delivery"
                value={values.delivery}
                onChange={handleChange}
                isInvalid={touched.delivery && !!errors.delivery}
              />
              <Form.Control.Feedback type="invalid">
                {errors.delivery}
              </Form.Control.Feedback>
            </Form.Group>

            {/* birthWeight */}
            <Form.Group controlId="birthWeight">
              <Form.Label>birthWeight</Form.Label>
              <Form.Control
                type="text"
                name="birthWeight"
                value={values.birthWeight}
                onChange={handleChange}
                isInvalid={touched.birthWeight && !!errors.birthWeight}
              />
              <Form.Control.Feedback type="invalid">
                {errors.birthWeight}
              </Form.Control.Feedback>
            </Form.Group>

            {/* complication */}
            <Form.Group controlId="complication">
              <Form.Label>Complication</Form.Label>
              <Form.Control
                type="text"
                name="complication"
                value={values.complication}
                onChange={handleChange}
                isInvalid={touched.complication && !!errors.complication}
              />
              <Form.Control.Feedback type="invalid">
                {errors.complication}
              </Form.Control.Feedback>
            </Form.Group>

            {/* babyMilestone */}
            <Form.Group controlId="babyMilestone">
              <Form.Label>BabyMilestone</Form.Label>
              <Form.Control
                type="text"
                name="babyMilestone"
                value={values.babyMilestone}
                onChange={handleChange}
                isInvalid={touched.babyMilestone && !!errors.babyMilestone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.babyMilestone}
              </Form.Control.Feedback>
            </Form.Group>


            {/* Thermal Table */}
            <div>
              <h2>Thermal Table</h2>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th></th>
                    <th>S</th>
                    <th>W</th>
                    <th>R</th>
                  </tr>
                </thead>
                <tbody>
                  {['fan', 'covering', 'bath'].map((key) => (
                    <tr key={key}>
                      <td>{key}</td>
                      {['s', 'w', 'r'].map((subKey) => (
                        <td key={subKey}>
                          <Form.Control
                            type="text"
                            name={`thermals.${key}.${subKey}`}
                            value={values.thermals[key][subKey]}
                            onChange={handleChange}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

      
          {/* ridingAgg */}
          <Form.Group controlId="ridingAgg">
              <Form.Label>RidingAgg</Form.Label>
              <Form.Control
                type="text"
                name="ridingAgg"
                value={values.ridingAgg}
                onChange={handleChange}
                isInvalid={touched.ridingAgg && !!errors.ridingAgg}
              />
              <Form.Control.Feedback type="invalid">
                {errors.ridingAgg}
              </Form.Control.Feedback>
            </Form.Group>

             {/* sunAgg */}
          <Form.Group controlId="sunAgg">
              <Form.Label>SunAgg</Form.Label>
              <Form.Control
                type="text"
                name="sunAgg"
                value={values.sunAgg}
                onChange={handleChange}
                isInvalid={touched.sunAgg && !!errors.sunAgg}
              />
              <Form.Control.Feedback type="invalid">
                {errors.sunAgg}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Additional form sections */}
            
            <Button variant="primary" type="submit">
              Save
            </Button>
            <Button variant="primary" type="submit">
              Cancel
            </Button>

            <Button
            variant="primary"
            onClick={handlePrint}
          >
            Print
          </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default CasePaperManagement;
