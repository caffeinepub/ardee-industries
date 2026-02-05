import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Array "mo:core/Array";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  type Inquiry = {
    id : Nat;
    subject : Text;
    body : Text;
    messageType : MessageType;
    submitter : Principal;
  };

  type MessageType = {
    #inquiry;
    #suggestion;
    #complaint;
    #praise;
  };

  type InquiryInput = {
    subject : Text;
    body : Text;
    messageType : MessageType;
  };

  var inquiries = Map.empty<Nat, Inquiry>();
  var nextInquiryId : Nat = 0;

  public shared ({ caller }) func createInquiry(input : InquiryInput) : async Nat {
    // Anyone including guests can submit inquiries
    let id = nextInquiryId;
    nextInquiryId += 1;

    let inquiry : Inquiry = {
      id = id;
      subject = input.subject;
      body = input.body;
      messageType = input.messageType;
      submitter = caller;
    };

    inquiries.add(id, inquiry);
    id;
  };

  public query ({ caller }) func listInquiries() : async [Inquiry] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can list inquiries");
    };

    Array.fromIter(inquiries.values());
  };

  public query ({ caller }) func getInquiry(id : Nat) : async ?Inquiry {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view inquiries");
    };

    inquiries.get(id);
  };
};
