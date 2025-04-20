import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut as firebaseSignOut, 
    onAuthStateChanged,
    User,
    NextOrObserver
  } from 'firebase/auth';
  import { auth } from '../lib/firebase'; // Firebase yapılandırma dosyanız
  import { AuthResponse, SignOutResponse } from '@/types';
  
  // Yeni kullanıcı kaydı
  export const registerUser = async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return { user: userCredential.user, error: null };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return { user: null, error: message };
    }
  };
  
  // Kullanıcı girişi
  export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { user: userCredential.user, error: null };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return { user: null, error: message };
    }
  };
  
  // Çıkış yapma
  export const signOut = async (): Promise<SignOutResponse> => {
    try {
      await firebaseSignOut(auth);
      return { success: true, error: null };
    }  catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return { success: false, error: message };
    }
  };
  
  // Kullanıcı durumunu izleme
  export const subscribeToAuthChanges = (callback: NextOrObserver<User>): () => void => {
    return onAuthStateChanged(auth, callback);
  };