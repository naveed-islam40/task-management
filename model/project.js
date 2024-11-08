import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    project_name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    project_description: {
      type: String,
      required: true,
    },
    pointof_contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    due_date: {
      type: Date,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    Attorney: {
      type: String,
      required: true,
    },
    Confilictof_interest: {
      type: String,
      required: true,
    },
    Examinee: {
      type: String,
      required: true,
    },
    tasks: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    }]
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
