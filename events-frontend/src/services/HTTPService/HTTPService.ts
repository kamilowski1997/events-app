import { EventDto } from '../../utils/interfaces/event';
import AxiosInstance from './AxiosInstance';
import { ADD_EVENT } from './events/endpoints';

class HTTPService {
  private axios = new AxiosInstance();

  addEvent = (eventData: EventDto) => this.axios.post(ADD_EVENT, eventData);
}

export default new HTTPService();
