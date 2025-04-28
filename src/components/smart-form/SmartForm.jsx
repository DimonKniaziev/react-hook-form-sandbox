import Form from "./Form";
import { Input, Select }from "./Inputs"

// interface ISmartForm {
//     firstName: string;
//     lastName: string;
//     gender: string
// }

export const SmartForm = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={onSubmit}>
      <Input name="firstName" />
      <Input name="lastName" />
      <Select name="gender" options={["female", "male"]} />
      <Input type="submit" value="Submit" />
    </Form>
  );
}